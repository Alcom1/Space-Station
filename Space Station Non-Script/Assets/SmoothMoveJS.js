var startspot : Transform;
var endspot : Transform;
 
function Start () {
    //SmoothMove(startspot.position, endspot.position, 5.0);
}

function Move(){
	SmoothMove(startspot.position, endspot.position, 5.0);
}
 
function SmoothMove (startpos : Vector3, endpos : Vector3, seconds : float) {
    var t = 0.0;
    while (t <= 1.0) {
        t += Time.deltaTime/seconds;
        transform.position = Vector3.Lerp(startpos, endpos, Mathf.SmoothStep(0.0, 1.0, t));
        yield;
    }
}