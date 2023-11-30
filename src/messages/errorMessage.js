

export default function errorMessage(functionName,err){
    console.error('\x1b[31m',`ERROR ${functionName} function :`, err+'\x1b[0m')
}