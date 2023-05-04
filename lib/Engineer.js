const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, gitHub){
        super(name, email, id);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;