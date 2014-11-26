#pragma strict
static var hi : int;
static var ti : int;

function Start () {

}

function Update () {
	guiText.text = ti + "/" + hi;
}