const projectStatus = {
    PENDING : {description : 'Pending Execution'}, 
    SUCCESS : {description : 'Executed Successfully'}, 
    FAILURE : {description : 'Execution Failed'}
}

class ProjectIdea {

    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    status = projectStatus.PENDING;

    updateProjectStatus(newStatus){
        this.status = newStatus;
    }    
}

class ProjectIdeaBoard {

    constructor(title){
        this.title = title;
    }

    ideas = [];

    pin(idea){
        return this.ideas.push(idea);
    }

    unpin(idea){
        if(this.ideas.length === 0){
            return;
        }

        const index = this.ideas.findIndex(i => i.title === idea.title);
        if(index > -1) return this.ideas.splice(index, 1);
    }

    count(ideas){
        return this.ideas.length;
    }

    formatToString(){
        let str = `${this.title} has ${this.count(this.ideas).toString()} idea(s)\n`;
        if(this.ideas.length === 0 || !Array.isArray(this.ideas)){
                return str = `Empty Board has 0 idea(s)\n`;
            } 
        
        this.ideas.forEach(idea => {
            str += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
        });
        return str;
    }
}

const projectIdea = new ProjectIdea('N8N', 'All about automation');
projectIdea.updateProjectStatus(projectStatus.FAILURE);

const projectBoard = new ProjectIdeaBoard('Automation');
projectBoard.pin(projectIdea);
projectBoard.unpin(projectIdea);
console.log(projectBoard);

console.log(projectBoard.formatToString());

