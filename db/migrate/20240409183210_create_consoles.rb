class CreateConsoles < ActiveRecord::Migration[7.1]
  def change
    create_table :consoles do |t|

      t.string :name
      t.string :logo

      t.timestamps
    end
  end
end
