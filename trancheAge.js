class TrancheAge{

    constructor(libelle,ageMin,ageMax){
        this._libelle = libelle;
        this._ageMax = ageMax;
        this._ageMin = ageMin;
    }

    get libelle(){
        return this._libelle;
    }

    get ageMin(){
        return this.ageMin;
    }

    get ageMax(){
        return this.ageMax;
    }

    toString(){
        return 'Tranche :'+this._ageMin+ ' ans et ' + this._ageMax+' ans.';
    }
}
module.exports = TrancheAge;