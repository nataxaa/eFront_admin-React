interface FormatValueProps{
    value:string | number;
}


const FormatValue = (value:number|string):string => {
    return `R$ ${value},00` ;
}

export default FormatValue;