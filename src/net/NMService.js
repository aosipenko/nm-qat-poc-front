const ENTITY_TYPE = "person";

const F_NAME_POOL = ["Donald", "Katy", "Keanu", "Tom", "Luke", "Ronald", "Umberto", "Bill", "John", "Sarah"];
const S_NAME_POOL = ["Trump", "Perry", "Reeves", "Lee", "Skywalker", "Reagan", "Eco", "Gates", "Doe", "Connor"];

const NM_INSTANCE_POOL = ["NM v1 Instance 1", "NM v1 Instance 2", "NM v2 Instance 1", "NM v2 Instance 2", "NM v2 Instance 3", "NM v2 Instance 4", "NM v2 Instance 5"];

class NMService {


    getNMInstance() {
        return {
            name: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
            IP: this.generateRandomIP(),
            desc: "lorem ipsum"
        };
    }

    getRequest() {
        let entities = [];
        for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
            entities.push({
                name: this.generateRandomName(),
                type: ENTITY_TYPE
            });
        }

        let nmList = [];

        for (let i = 0; i < Math.floor(Math.random() * NM_INSTANCE_POOL.length);) {
            var nmInstance = NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)];
            if (!nmList.includes(nmInstance)) {
                nmList.push(nmInstance);
                ++i;
            }
        }

        return {
            entities: entities,
            nmList: nmList
        };
    }

    generateResponse() {
        let responseList =
            [
                {
                    nmName: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
                    responseTime: Math.random() * 1000,
                    precision: Math.random() * 100,
                    recall: 5,
                    recallDetails: [
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName()
                    ]
                },
                {
                    nmName: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
                    responseTime: Math.random() * 1000,
                    precision: Math.random() * 100,
                    recall: 4,
                    recallDetails: [
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName()
                    ]
                },
                {
                    nmName: NM_INSTANCE_POOL[Math.floor(Math.random() * NM_INSTANCE_POOL.length)],
                    responseTime: Math.random() * 1000,
                    precision: Math.random() * 100,
                    recall: 7,
                    recallDetails: [
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName(),
                        this.generateRandomName()
                    ]
                }
            ]
        ;
        return responseList;
    }

    generateRandomIP() {
        return Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256);
    }

    generateRandomName() {
        return F_NAME_POOL[Math.floor(Math.random() * F_NAME_POOL.length)] + " " + S_NAME_POOL[Math.floor(Math.random() * S_NAME_POOL.length)];
    }
}