class DocumentsController < ApplicationController

  before_action :set_document, only: [:show]

  def index
    redirect_to new_document_path
  end

  def new
    @documents = Document.all.count
    @document = Document.new
  end

  def create
    @document = Document.new(document_params)
    @document.save ? redirect_to(document_path(@document.token)) : redirect_to(documents_path, notice: 'You need to fill with something.')
  end

  def show
  end

  private

  def set_document
    @document = Document.find_by_token(params[:id])
  end

  def document_params
    params.require(:document).permit(:body, :editor_session)
  end
end
