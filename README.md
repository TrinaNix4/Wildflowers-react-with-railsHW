# README

# Steps for the RAILS portion 

* Start a new RAILS file
 
 * cd or mkdir and cd into desired directory where you want project to live
 * in terminal, type
 ```
 rails new name_of_project -d postgresql -- api

 ```
 * cd into the rails project you just created

 ```
 $ rails db:create

 ```
create model with name and desired attributes:

```
rails g model 'model_name' attr1:string attr2:integer attr3:boolean

```
* Next, run migrate command which creates a the table for your model. Migrate allows you to update/delete/add or take away columns, etc. - maintain the structure of the database
```
$ rails db:migrate

```

*Seed your database using the seeds.rb file.  Go to the file and type, for example:
```
Wildflower.destroy_all

Wildflower.create(common_name: 'Boreal Sweetvetch', scientific_name:'Hedysarum boreale', description:'Bright pink member of the pea family. Pea flower shape that consists of banner, wings, and keel. Leaf shape is pinnately compound.', Observed:false)
Wildflower.create(common_name: 'Tapertip Hawksbeard', scientific_name:'Crepis acuminata', description:'Yellow aster-like flowers, and extremely toothy leaves. Several flowers on each stalk and leaves are grey-green and leathery.', Observed:false)
Wildflower.create(common_name: 'Mulesear', scientific_name:'Wyethia amplexicaulis', description:'Large yellow aster-like flower and grows close to the ground. Has dark green lance-shaped leaves.', Observed:false)

```

then in terminal, type:
```
$ rails db:seed

```

* this is a good point to create a repository in github.  
* copy and paste remote into project
* use the following commands to push to github
```
$ git add .
$ git commit -m'description'
$ git push origin main 

```
* helpful tip: test code and push code to github frequently when the code is working!  

* run command to create controller files 

```
$ rails g controller api/wildflowers

```

* next step, go to routes.rb file in your project and create the routes using CRUD 

```
Rails.application.routes.draw do
  
namespace :api do

get 'wildflowers', to: 'wildflowers#index'  
get 'wildflowers/:id', to: 'wildflowers#show'
post 'wildflowers', to: 'wildflowers#create'
put 'wildflowers/:id', to: 'wildflowers#update'
delete 'wildflowers/:id', to: 'wildflowers#destroy'


  end
end

```

* After routes are added, go to controller file and define the route methods 

* test all methods with postman app

# SET UP RAILS AND REACT 
* next connect our rails app to react app. in the terminal in my rails project directory, you can either create react app or clone a starter react project down.  in this project, we are naming the react folder 'client' 

 ```
 $ cd (into rails project directory) 
 $ yarn create react-app client
 $ cd client
 $ yarn start 

//option 2
$ git clone 'git@github.com address' client
$ cd client
$ yarn
$yarn start 
```
* add proxy in client/package.json. we always need to have rails running on port:3001 for this to work 
```
"proxy": "http://localhost:3001",

```

* next have rails and react running split screen in terminal.  use cmd-d and have one in 'client' and one in your rails project directory

*start the rails server and the react app
```
$ rails s -p 3001
$ yarn start 

```
# where to start in React 
 - routes/components navigation type things
    - form that handles both new and edit
    - wildflowers - list all wildflowers
    - wildflower - render a single fact 
    - wildflowerShow - render a single wildflower on its own page (react router)
 - CRUD actions in provider folder
    - axios calls (api calls to interact with rails)
    - updating our state 
- UI 
  - setting up forms
  - connecting our state to UI 
  - error handlig 
  - UX like loaders/nav
  - styling 
* can be done in any order

1. create folders and files under src/pages...
 - Wildflower.js, Wildflowers.js, WildflowerShow.js etc
 -stub out each page 
 ```
import React from 'react';

const Wildflower = (props) => {
  return(
    <div className='border'>
      <h1>Wildflower</h1>
    </div>
  )
}

export default Wildflower;

```
* and in app.css add some styling to help visualize nested elements 
```
.border {
  border: 1 px dashed black; 
  margin: 10px;
  padding: 10px; 
}

.border .border {
  border: 1px dashed red; 
   
}
 ```

 