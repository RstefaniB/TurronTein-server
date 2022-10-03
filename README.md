## Introduction

We will be building a React app so the API (server) needs to be built somewhere for us, right? 

The available endpoints are the following:

| Method | Endpoint            | Response (200)                                         | Action                                                                                                                                  |
| ------ | ------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /                   | [survey]                                                | Get all the surveys from the DB                                                                                                           |
| GET    | /survey/:id                | { survey }                                               | Get the a single/specific survey  
| GET    | /user/:id                | { user }                                               | Get the a single/specific user                                                                                                        |
| GET    | /random             | { survey }                                               | Get a random survey from the DB                                                                                                           |
| POST   | /new                | { message: "New survey successfully saved to database!"} | Create a new survey (the fields are specified in the instructions)                                                                        |
| GET    | /search?q=`{query}` | [surveys]                                                | Get surveys from the DB whose name contains the search term. For example `/search?q=chocolate` searches for all surveys with chocolate in the name. |

On each iteration, we will explain which endpoint you should use!

## JSON response format

```json
{
    "proteinTurron": true,
    "flavour": "yema",
    "brittleness": ["softchew" , "semi-hard", "gominola","hard"],
    "weeklyNumber": 10,    
    "type": ["yogurt", "ice cream","smoothie","cake"],
    "likes": 10,
    "_id": "5e8ef56a60fa824d1e2db3d9",
    "username": "popino",
    "email": "popino@popino.com",
    "gender": "female",
    "age": "21",
    "sport": "rafting",
    "city": "San Sebastian"
  }
```

## JSON response data types
| Property 	        | Data type      	| 
|-------------  	|---------------	|
| `_id`         	| String             	| 
| `lastname`     | String             	| 
| `firstname`     | String             	|
| `email`         | String             	| 
| `gender`        | Boolean             	| 
| `age`         	| Number             	| 
| `sport`         	| String             	| 
| `city`         	| String             	| 
| `proteinTurron`     	| String             	| 
| `flavour`       	| String             	| 
| `brittleness`   	| Array             	| 
| `weeklyNumber`    | Number             	| 
| `type`        	| Array             	| 
| `likertScale`    	| Number             	| 
