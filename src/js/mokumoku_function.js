console.log("hello");

const helloFunc = (target) => {
    return "hello," + target
};

// モジュールを外出しする場合はexportで指定する
export {helloFunc}