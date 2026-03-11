console.log('😄');
// https://pomb.us/build-your-own-react/
// REFERENCE CODE LINK

`STEP 0 : Creating a simple node inside the DOM using javascript`;

// const element_0 = <h1 title="foo">Hello</h1>;

// the above code element will become this =>
// after getting parsed from Babel, which is further passed to React

// const element_0 = React.createElement(
//     "h1",
//     { title: "foo" },
//     "Hello"
// );

// and the above code element will become this =>
// as the final object in React which afterwards get rendered as a DOM node.
// we are trying to convert the JSX -> React understandable -> object -> render on DOM

const element_0 = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
};

// Now as the JSX is parsed into a js object, now we have to make it render on the DOM 
// which react does using ReactDOM.render method

const container_0 = document.getElementById("root_0");

const node_0 = document.createElement(element_0.type);  // h1
node_0["title"] = element_0.props.title;

const text_0 = document.createTextNode("");   // textNode
text_0["nodeValue"] = element_0.props.children;

// append the textNode to the h1 and h1 to the container
// node_0.appendChild(text_0);
// container_0.appendChild(node_0);

`********************************************************************************************
STEP 1 : Creating the 'createElement' function for our custom React
********************************************************************************************`;

// const element = (
//     <div id="foo">
//         <a>bar</a>
//         <p>paragraph text</p>
//     </div>
// );
const container = document.getElementById("root");
// ReactDOM.render(element, container);

// the above code element will become this; (just like above) =>

// const element = React.createElement(
//     "div",
//     { id: "foo" },
//     React.createElement("a", null, "bar"),
//     React.createElement("p", null, "paragraph text")
// );

`Let's write our own custom "createElement" method just like React.createElement`
// return value of this function is going to be an object and will look like this =>
// element = {
//  "type": "div",
//  "props": {
//     id: "foo",
//     children: [React.createElement("a", null, "bar"), React.createElement("b")]
//      }
// }

// and the final value of element will look like this
// element = {
//     type: "div",
//     props: {
//         id: "foo",
//         children: [{
//                 type: "a",
//                 props: {
//                     children: [{
//                         type: "TEXT_ELEMENT",
//                         props: {
//                             nodeValue: "bar",
//                             children: []
//                         }
//                     }]
//                 }
//             },
//             {
//                 type: "b",
//                 props: {
//                     children: []
//                 }
//             }
//         ]
//     }
// };

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(item => {
                if (typeof item === "object") return item;
                else return createTextElement(item);
            })
        }
    }
};

// The children array could also contain primitive values like strings or numbers.
// So we’ll wrap everything that isn’t an object inside its own element and create a special type for them: 'TEXT_ELEMENT'
// using 'createTextElement' method.

`!!! IMPORTANT !!!
React doesn't wrap primitive values or create empty arrays when there aren't children, 
but we do it because it will simplify our code, and for our library we prefer simple code than performant code
`

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        }
    }
};

// Naming our own library "Didact" 😄
const Didact = {
    createElement,
    render
};

const element = Didact.createElement(
    "div",
    { id: "foo" },
    Didact.createElement("a", null, "bar"),
    Didact.createElement("p", null, "paragraph text")
);

// But we have to write JSX here and for that, we need to tell babel to use Didact’s createElement instead of React’s;
// for that we have to put a comment like this one,
// when babel transpiles the JSX it will use the function we define.

/** @jsx Didact.createElement */
// const element = (
//     <div id="foo">
//         <a>bar</a>
//         <p>paragraph text</p>
//     </div>
// );

`********************************************************************************************
STEP 2 : Creating the 'render' function
********************************************************************************************`;

// We are going to re-write the "render" function later for creating the fiber;
// this one is for the basic understanding and make the code work written till yet.
// You can uncomment it and test, code written till yet is working and able to render the "a" and "p" tag.

// function render(element, container) {
//     const dom =
//         element.type == "TEXT_ELEMENT"
//             ? document.createTextNode("")
//             : document.createElement(element.type);

//     const isProperty = (key) => {
//         return key !== "children";
//     }

//     Object.keys(element.props)
//         .filter(isProperty)
//         .forEach(name => {
//             dom[name] = element.props[name]
//         });

//     *// Now there’s a problem with this recursive call.
//     // Once we start rendering, we won’t stop until we have rendered the complete element tree. 
//     // If the element tree is big, it may block the main thread for too long. 
//     // And if the browser needs to do high priority stuff like handling user input or keeping an animation smooth, 
//     // it will have to wait until the render finishes.
//     element.props.children.forEach(item => {
//         render(item, dom);
//     });

//     container.appendChild(dom);
// };

// *To resolve the above (freezing UI) issue, we are going to break the work into small units using "requestIdleCallback"=>

let nextUnitOfWork = null;
let wipRoot = null;
let currentRoot = null;

function workLoop(deadline) {
    let shouldYield = false;

    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(
            nextUnitOfWork
        )

        shouldYield = deadline.timeRemaining() < 1;
    }

    if (!nextUnitOfWork && wipRoot) {
        commitRoot()
    }

    requestIdleCallback(workLoop);
    // To understand how "requestIdleCallback" works, 
    // you can refer to "definitions.txt" file, which contains the MDN link and some examples.
}

`!!! IMPORTANT !!!
React doesn't use requestIdleCallback anymore. Now it uses the scheduler package. 
But for this use case it's conceptually the same.
`

requestIdleCallback(workLoop);

// function performUnitOfWork(fiber) {
//     // 1 - add dom node
//     // 2 - create new fibers
//     // 3 - return next unit of work

//     // i - add dom node
//     if (!fiber.dom) {
//         fiber.dom = createDom(fiber)
//     }

//     // if (fiber.parent) {
//     //     fiber.parent.dom.appendChild(fiber.dom)
//     // }

//     // ii - create new fibers
//     const elements = fiber.props.children;
//     let index = 0;
//     let prevSibling = null;

//     while (index < elements.length) {
//         const element = elements[index]

//         const newFiber = {
//             type: element.type,
//             props: element.props,
//             parent: fiber,
//             dom: null,
//         }

//         if (index === 0) {
//             fiber.child = newFiber
//         } else {
//             prevSibling.sibling = newFiber
//         }

//         prevSibling = newFiber
//         index++
//     }

//     // iii - return next unit of work
//     if (fiber.child) {
//         return fiber.child
//     }

//     let nextFiber = fiber;

//     while (nextFiber) {
//         if (nextFiber.sibling) {
//             return nextFiber.sibling
//         }

//         nextFiber = nextFiber.parent
//     }
// }

function performUnitOfWork(fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    const elements = fiber.props.children;
    reconcileChildren(fiber, elements);

    if (fiber.child) {
        return fiber.child;
    };

    let nextFiber = fiber;

    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling;
        }
        nextFiber = nextFiber.parent;
    }
}

function reconcileChildren(wipFiber, elements) {
    let index = 0;
    let prevSibling = null;

    while (index < elements.length) {
        const element = elements[index];

        const newFiber = {
            type: element.type,
            props: element.props,
            parent: wipFiber,
            dom: null,
        };

        if (index === 0) {
            wipFiber.child = newFiber;
        } else {
            prevSibling.sibling = newFiber;
        }

        prevSibling = newFiber;
        index++;
    }
}

// Here we are going to re-write the render function :->
// In the render we’ll create the "root fiber" and set it as the "nextUnitOfWork". 
// The rest of the work will happen on the "performUnitOfWork" function, 
// there we will do three things for each fiber :
//      - add the element to the DOM
//      - create the fibers for the element’s children
//      - select the next unit of work

function createDom(fiber) {
    const dom =
        fiber.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(fiber.type)

    const isProperty = (key) => {
        return key !== "children";
    }

    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = fiber.props[name]
        })

    return dom;
};

function commitRoot() {
    commitWork(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
}

function commitWork(fiber) {
    if (!fiber) {
        return
    }
    const domParent = fiber.parent.dom
    domParent.appendChild(fiber.dom)
    commitWork(fiber.child)
    commitWork(fiber.sibling)
}

function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
        alternate: currentRoot,
    }

    nextUnitOfWork = wipRoot;
};

Didact.render(element, container);

