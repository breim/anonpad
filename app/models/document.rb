class Document < ActiveRecord::Base
  before_create :build_token

  validates :body, :editor_session, presence: true

  def build_token
    self.token = SecureRandom.uuid
  end
end
