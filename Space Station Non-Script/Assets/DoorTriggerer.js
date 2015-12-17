#pragma strict

var airlockdoor : GameObject;

function Start () {

}

function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag == "AirlockTrigger"){
				airlockdoor.GetComponent(SmoothMoveJS).Move();
		}
	}

function Update () {

}