class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.text :body, null: false
      t.text :editor_session
      t.text :token, null: false

      t.timestamps null: false
    end
  end
end
