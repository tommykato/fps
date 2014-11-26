#pragma strict
public var nisiko : GameObject;
public var nishiko : Transform;
public var speed : float;
static public var zenndann : int = 300;
public var tama : int = 20;
public var interval : float = 0.3;
public var time : float = 0;
public var tamasuu : int = 100;

function Start () {
	nigo.hi = zenndann;
	nigo.ti = tama;
}

function Update () {
	if (Input.GetButton("Fire1")) {
		if (tama > 0) {
			time += Time.deltaTime;

			if (time >= interval) {
				Shot();
				time = 0;
			}
		}
	}

	if (Input.GetKeyDown(KeyCode.R)) {
		Riload();
}
	if(tama == 0){
		Riload();
	}
	
	  
}
function Shot() {
	var obj : GameObject = GameObject.Instantiate(nisiko);
	obj.transform.position = nishiko.position;
	obj.rigidbody.AddForce(transform.right * speed);
	tama --;
	nigo.ti --;
}
function Riload() {
	if (tama < tamasuu && tama + zenndann > tamasuu) {
		zenndann = zenndann - (tamasuu - tama);
		tama = tamasuu;
		nigo.hi = zenndann;
		nigo.ti = tama;
	} else if (tama < tamasuu && tama + zenndann == tamasuu) {
		zenndann = 0;
		tama = 100;
		nigo.hi = zenndann;
		nigo.ti = tama;
	} else if (tama < tamasuu && tama + zenndann < tamasuu) {
		tama = tama + zenndann;
		zenndann = 0;		 
		nigo.hi = zenndann;
		nigo.ti = tama;
	}
}