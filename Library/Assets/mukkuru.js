#pragma strict
var i : boolean = true;



function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire2")){
		if(i ==true){
			
			
			transform.localPosition = new Vector3(0.002,-0.045,0.16);
			i = false;
			CharacterMotorMovement.maxForwardSpeed = 3.0;
			CharacterMotorMovement.maxSidewaysSpeed = 3.0;
			CharacterMotorMovement.maxBackwardsSpeed = 3.0;

		}
		else if(i == false){
			transform.localPosition = new Vector3(0.04,-0.06,0.07);
			i = true;
			CharacterMotorMovement.maxForwardSpeed = 10.0;
			CharacterMotorMovement.maxSidewaysSpeed = 10.0;
			CharacterMotorMovement.maxBackwardsSpeed = 10.0;

		}
	}
}