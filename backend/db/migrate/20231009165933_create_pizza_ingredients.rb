class CreatePizzaIngredients < ActiveRecord::Migration[7.1]
  def change
    create_table :pizza_ingredients do |t|
      t.references :pizza
      t.references :ingredient

      t.timestamps
    end
  end
end
