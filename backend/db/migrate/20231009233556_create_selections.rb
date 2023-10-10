class CreateSelections < ActiveRecord::Migration[7.1]
  def change
    create_table :selections do |t|
      t.references :pizza
      t.references :order
      t.integer :quantity

      t.timestamps
    end
  end
end
