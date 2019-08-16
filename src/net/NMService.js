const ENTITY_TYPE = "person";

const F_NAME_POOL = ["Donald", "Katy", "Keanu", "Tom", "Luke", "Ronald", "Umberto", "Bill", "John", "Sarah"];
const S_NAME_POOL = ["Trump", "Perry", "Reeves", "Lee", "Skywalker", "Reagan", "Eco", "Gates", "Doe", "Connor"];

const NM_INSTANCE_POOL = ["NM v1 Instance 1", "NM v1 Instance 2", "NM v2 Instance 1", "NM v2 Instance 2", "NM v2 Instance 3", "NM v2 Instance 4", "NM v2 Instance 5"];

export function getNMInstance() {
    return {
        name: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
        IP: generateRandomIP(),
        desc: "lorem ipsum"
    };
}

export function getRequest() {
    let entities = [];
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        let nmList = [];

        for (let j = 0; j < Math.floor(Math.random() * NM_INSTANCE_POOL.length);) {
            var nmInstance = NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)];
            if (!nmList.includes(nmInstance)) {
                nmList.push(nmInstance);
                ++j;
            }
        }

        entities.push({
            seq: i,
            name: generateRandomName(),
            type: ENTITY_TYPE,
            nmList: nmList
        });
    }

    return entities;
}

export function generateResponse() {
    let responseList =
        [
            {
                nmName: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
                responseTime: Math.random() * 1000,
                precision: Math.random() * 100,
                recall: 5,
                recallDetails: [
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName()
                ]
            },
            {
                nmName: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
                responseTime: Math.random() * 1000,
                precision: Math.random() * 100,
                recall: 4,
                recallDetails: [
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName()
                ]
            },
            {
                nmName: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
                responseTime: Math.random() * 1000,
                precision: Math.random() * 100,
                recall: 7,
                recallDetails: [
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName(),
                    generateRandomName()
                ]
            }
        ]
    ;
    return responseList;
}

export function generateRandomIP() {
    return Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256);
}

export function generateRandomName() {
    return F_NAME_POOL[Math.floor(Math.random() * F_NAME_POOL.length)] + " " + S_NAME_POOL[Math.floor(Math.random() * S_NAME_POOL.length)];
}
