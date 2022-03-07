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


