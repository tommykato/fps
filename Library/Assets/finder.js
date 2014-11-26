#pragma strict
public var firstpos : float = 0.04;
public var secondpos : float = 0.006;
public var speed : float = 0.0001;

function Start () {

}

function Update () {
	if(Input.GetButton("Fire2")) {
		if (transform.localPosition.x == firstpos) {
			while (true) {
				if(transform.localPosition.x > secondpos) {
					transform.Translate(-0.1 * speed,0.0,0.0);
				} else {
					transform.localPosition.x = secondpos;
					break;
				}
			}
		} else if (transform.localPosition.x == secondpos) {
			while (true) {
				if(transform.localPosition.x < firstpos) {
					transform.Translate(0.1 * speed,0.0,0.0);
				} else {
					transform.localPosition.x = firstpos;
					break;
				}
			}
		}
	}
}