let is_ok = true;

let promise = (task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            },100);
        } else {
            reject("error");
        }
    });
}

export default promise;