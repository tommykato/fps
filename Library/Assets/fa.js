#pragma strict
public var first : GameObject;
public var a : GameObject;
function Start () {

}

function Update () {
	if(first.transform.position.x == 1190 && first.transform.position.z == 930){
		nisiko.zenndann = nisiko.zenndann + 100;
		nigo.hi = nigo.hi +100;
		Destroy(a);
	} 

}