#pragma strict

var airlockdoor : GameObject;
var securitydoor : GameObject;

function Start () {

}

function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag == "AirlockTrigger"){
				airlockdoor.GetComponent(SmoothMoveJS).Move();
		}
		if(other.gameObject.tag == "SecurityTrigger"){
				securitydoor.GetComponent(SmoothMoveJS).Move();
		}
	}

function Update () {

}