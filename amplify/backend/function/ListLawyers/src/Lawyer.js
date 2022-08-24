class Lawyer{
    constructor(lawyer){
        this.id = {S: this.generateUUID()};
        this.name = {S: lawyer.name};
        this.type = {S: lawyer.type};
        this.experience = {N: lawyer.experience};
        this.rating = {N: lawyer.rating};
        this.qualifications = {M: lawyer.qualifications};
        this.officeDetails = {M: lawyer.officeDetails};
        this.location = {M: lawyer.location};
        this.about = {S: lawyer.about};
    }

    generateUUID(){
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
}

module.exports = Lawyer;