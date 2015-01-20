# RESTinForm Frontend Side
Frontend side for app hosted in https://restinform.herokuapp.com

HTML, CSS, JQuery with Ajax Requests.
The frontend talks to:
- the Facebook Graph API through Facebook Javascript SDK in order to authenticate a user and gather his first name, his current location and his profile image.
- the Director through an Ajax request with a jsonp parameter in order to enable cross-domain requests.
- to DBService in order to store weight and height inserted a user.

Contributors: [Roberto Zen](https://github.com/robzenn92) 100%

```
{  
   "result":[  
      {  
         "activityplan":{  
            "bmirange":2,
            "idphrase":4,
            "change":2,
            "phrase":"poppa333",
            "weathertype":1,
            "activity":"ciao"
         },
         "weather":{  
            "location":"Trento, Italy",
            "temp":-4.8,
            "weather":"Clear",
            "type":1
         }
      },
      {  
         "activityplan":{  
            "bmirange":2,
            "idphrase":4,
            "change":2,
            "phrase":"poppa333",
            "weathertype":1,
            "activity":"ciao"
         },
         "weather":{  
            "location":"Trento, Italy",
            "temp":-6.28,
            "weather":"Clear",
            "type":1
         }
      },
      {  
         "activityplan":{  
            "bmirange":2,
            "idphrase":4,
            "change":2,
            "phrase":"poppa333",
            "weathertype":1,
            "activity":"ciao"
         },
         "weather":{  
            "location":"Trento, Italy",
            "temp":-4.37,
            "weather":"Clouds",
            "type":1
         }
      }
   ]
}
```