let football = {
    Fname:"cristiano",
    Lname:"ronaldo",
    age:"39",
    baga:"825000000",
    dopsan:"900+",
    kamanda:["皇马","尤文图斯","曼联","利雅得胜利"],
    info_listh:function(){
        return`basaty:${this.Fname}
        aiakaty:${this.Lname}
        zhasy:${this.age}
        bagasy:${this.baga}
        dopsany:${this.dopsan}
        kamandasy:${this.kamanda}`
    }
}
alert(football.info_listh())