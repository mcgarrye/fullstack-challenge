# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
tomato = Ingredient.create!(name: 'tomato')
mozzarella = Ingredient.create!(name: 'mozzarella')
mozzarella_bufala = Ingredient.create!(name: 'mozarella di bufala')
anchovies = Ingredient.create!(name: 'anchovies')
oregano = Ingredient.create!(name: 'oregano')
oil = Ingredient.create!(name: 'oil')
salami = Ingredient.create!(name: 'spicy salami')

margherita = Pizza.create!(name: 'Margherita', price: 5)
bufala = Pizza.create!(name: 'Bufala', price: 6)
romana = Pizza.create!(name: 'Romana', price: 5)
diavola = Pizza.create!(name: 'Diavola', price: 7.5)
bianca = Pizza.create!(name: 'Pizza Bianca', price: 5)

PizzaIngredient.create!(pizza: margherita, ingredient: tomato)
PizzaIngredient.create!(pizza: margherita, ingredient: mozzarella)

PizzaIngredient.create!(pizza: bufala, ingredient: tomato)
PizzaIngredient.create!(pizza: bufala, ingredient: mozzarella_bufala)

PizzaIngredient.create!(pizza: romana, ingredient: tomato)
PizzaIngredient.create!(pizza: romana, ingredient: mozzarella)
PizzaIngredient.create!(pizza: romana, ingredient: anchovies)
PizzaIngredient.create!(pizza: romana, ingredient: oregano)
PizzaIngredient.create!(pizza: romana, ingredient: oil)

PizzaIngredient.create!(pizza: diavola, ingredient: tomato)
PizzaIngredient.create!(pizza: diavola, ingredient: mozzarella)
PizzaIngredient.create!(pizza: diavola, ingredient: salami)

PizzaIngredient.create!(pizza: bianca, ingredient: mozzarella)
PizzaIngredient.create!(pizza: bianca, ingredient: oregano)
