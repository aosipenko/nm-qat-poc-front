export function putMessage(message) {
    return fetch("http://localhost:8080/qat-service/api/kafka/post?value=" + message, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}

export function retrieveMessageList() {
    return fetch("http://localhost:8080/qat-service/api/kafka/retrieve");
}