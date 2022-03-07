# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Wildflower.destroy_all

Wildflower.create(common_name: 'Boreal Sweetvetch', scientific_name:'Hedysarum boreale', description:'Bright pink member of the pea family. Pea flower shape that consists of banner, wings, and keel. Leaf shape is pinnately compound.', Observed:false)
Wildflower.create(common_name: 'Tapertip Hawksbeard', scientific_name:'Crepis acuminata', description:'Yellow aster-like flowers, and extremely toothy leaves. Several flowers on each stalk and leaves are grey-green and leathery.', Observed:false)
Wildflower.create(common_name: 'Mulesear', scientific_name:'Wyethia amplexicaulis', description:'Large yellow aster-like flower and grows close to the ground. Has dark green lance-shaped leaves.', Observed:false)
Wildflower.create(common_name: 'Sego Lily', scientific_name:'Calochortus nuttallii', description:'Utah State Flower. Has three large white petals that are yellow and hairy at the base.', Observed:false)
Wildflower.create(common_name: 'Wasatch Penstemon', scientific_name:'Penstemon cyananthus', description:'Tall with blue-violet flowers. Leaves are situated opposite of one another, and have wide bases that appear to clasp the stem', Observed:false)

puts "seeded DB"
puts "Wildflower size is #{Wildflower.all.size}"
p Wildflower.all 