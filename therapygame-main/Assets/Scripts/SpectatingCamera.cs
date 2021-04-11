/* 
 * This file is part of Unity-Procedural-IK-Wall-Walking-Spider on github.com/PhilS94
 * Copyright (C) 2020 Philipp Schofield - All Rights Reserved
 */

using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using UnityEngine;

/*
 * Inherits from abstract class CameraAbstract and manipulates the camera target by mimicking position change of the observed object,
 * but ignoring rotational change. The camera targets rotation is always set to look at the observed object while forcing it
 * to stay upright to global Y.
 */
public class SpectatingCamera : CameraAbstract {

    private Vector3 lastPosition;
    public List<string> headTransforms = new List<string>();
    public List<string> fingerTransforms = new List<string>();


    protected override void Awake() {
        base.Awake();
        lastPosition = observedObject.position;

      
    }
    public async void postData()
    {
       using (var httpClient = new HttpClient())
{
    using (var request = new HttpRequestMessage(new HttpMethod("POST"), "https://parseapi.back4app.com/classes/Data"))
    {
        request.Headers.TryAddWithoutValidation("X-Parse-Application-Id", "fpNxOD1XHREDA8T7NLYiXtrrs2nZnmkL3b1oyYAO");
        request.Headers.TryAddWithoutValidation("X-Parse-REST-API-Key", "qK2udEztLKqxO9ozNfpD1BIFXROc4IsGOdSmqv69");
                string h =  string.Join(",", headTransforms.ToArray());
           
                string f = string.Join(",", fingerTransforms.ToArray());
                Debug.Log(f);
                request.Content = new StringContent("{ \"Vaishnavi Subbudu\":\"A string\",\"headTransforms\":\""+h+"\",\"fingerTransforms\":\""+f+"\"}");
        request.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json"); 

        var response = await httpClient.SendAsync(request);
    }
}
    }

    void OnApplicationQuit()
    {
        postData();
    }

    protected override void Update() {
        base.Update();
        updateCameraTarget();
        headTransforms.Add(transform.position.x.ToString());
        headTransforms.Add(transform.position.y.ToString());
        headTransforms.Add(transform.position.z.ToString());
        Debug.Log("Head x transform: " + transform.position.x + " |Head y transform: " + transform.position.y + " |Head z transform: " + transform.position.z);
        if (Input.anyKeyDown)
        {
            float a = Random.Range(0.03f, 0.17f);
            float b = Random.Range(0.07f, 1.43f);
            float c = Random.Range(1.37f, 4.43f);
            fingerTransforms.Add(a.ToString());
            fingerTransforms.Add(b.ToString());
            fingerTransforms.Add(c.ToString());
            Debug.Log("Finger Transform: ("+Random.Range(0.03f, 0.17f)+","+ Random.Range(0.07f, 1.43f) + "," + Random.Range(1.37f, 4.43f)+")");
        }
    }

    private void updateCameraTarget() {

        // Position
        Vector3 translation = observedObject.position - lastPosition;
        camTarget.position += translation;
        lastPosition = observedObject.position;

        //Rotation
        Vector3 newForward = Vector3.ProjectOnPlane(observedObject.position - camTarget.position, Vector3.up);
        if (newForward != Vector3.zero)
            camTarget.rotation = Quaternion.LookRotation(observedObject.position - camTarget.position, Vector3.up);
    }

    protected override Vector3 getHorizontalRotationAxis() {
        return Vector3.up;
    }
    protected override Vector3 getVerticalRotationAxis() {
        return camTarget.right;
    }
}
