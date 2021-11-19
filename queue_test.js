let express = require("express");
let fs = require("fs");

async function queueProcessing() {
    while (true) {
        try {
            data = fs.readFileSync("./output/storage/users.txt").toString();
            users = JSON.parse(data);
            users.forEach((user, index, users) => {
                console.log(`${user.name}'s task processed.`);
                users.splice(index, 1);
            });
            fs.writeFileSync("./output/storage/users.txt", JSON.stringify(users));
        } catch (error) {
            //console.log(`Queue ${error.toString()}`);
        }

        await new Promise(resolve => setTimeout(resolve, 10000));
    }
}

queueProcessing();


let app = express();

//app.use(express.json());

app.get("/", (req, res) => {
    try {
        let name = req.query.name;
        let data = "";
        let users = [];
        try {
            data = fs.readFileSync("./output/storage/users.txt").toString();
        } catch { }
        if (data !== "") {
            users = JSON.parse(data);
        }
        if (users.length) {
            users.forEach((user, index, users) => {
                if (user.name !== name) {
                    users.push({ name: name });
                }
            });
        } else {
            users.push({ name: name });
        }
        fs.writeFileSync("./output/storage/users.txt", JSON.stringify(users));
        res.send(`<html><body><h4>Hello ${name}, Your task is under processing.</h4</body></html>`);
    } catch (error) {
        res.send(`<html><body><h4>${error.toString()}</h4</body></html>`);
    }
});

app.listen(3000, () => {
    console.log(`Server started`);
});
