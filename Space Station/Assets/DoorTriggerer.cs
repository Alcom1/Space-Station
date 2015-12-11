using UnityEngine;
using System.Collections;

public class DoorTriggerer : MonoBehaviour {
	public GameObject door1;
	public GameObject door2;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter(Collider col){
		Debug.Log("Trigger");
		if (col.gameObject.tag == "Door1") {
			Debug.Log("Door1");
			if(!door1.GetComponent<Animation>().isPlaying){
				door1.GetComponent<Animation>().Play();
			}
		}
	}
}
