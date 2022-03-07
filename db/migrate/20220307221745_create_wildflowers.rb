class CreateWildflowers < ActiveRecord::Migration[7.0]
  def change
    create_table :wildflowers do |t|
      t.string :common_name
      t.string :scientific_name
      t.string :description
      t.boolean :Observed

      t.timestamps
    end
  end
end
