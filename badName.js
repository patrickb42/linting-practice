//I like documenting my code with comments that aren't useful to other devs 
function dumb_function (){return "dumb function is dumb"}
const badName=index=>{ 
   let type="number;"
    let a=0;let b=1
    let this_i$_theVariableThat_will_be_returned_butItWill_also_be_theThingToHoldThe_newValue_thatIsNextInTheCycle_=0

    if(typeof index!=type||index<1) 
      throw new Error ( "invalid argument" ) ;
    if(index=1)return 0 
    for( let i=1;i<index;i++ ){
        this_i$_theVariableThat_will_be_returned_butItWill_also_be_theThingToHoldThe_newValue_thatIsNextInTheCycle_ = a + b 
      a=b 
        b=this_i$_theVariableThat_will_be_returned_butItWill_also_be_theThingToHoldThe_newValue_thatIsNextInTheCycle_ 
      console.log('line 15 ' + this_i$_theVariableThat_will_be_returned_butItWill_also_be_theThingToHoldThe_newValue_thatIsNextInTheCycle_) 
    }



      return this_i$_theVariableThat_will_be_returned_butItWill_also_be_theThingToHoldThe_newValue_thatIsNextInTheCycle_
}

let exportObj = {badName,dumb_function,}

module.exports  =  exportObj;