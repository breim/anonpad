class DocumentsController < ApplicationController
  def index
    redirect_to new_document_path
  end

  def new
    @document = Document.new
  end

end
