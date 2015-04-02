class Document < ActiveRecord::Base
  before_create :build_token

  validates :body, presence: true

  def build_token
    self.token = SecureRandom.hex(5)
  end
end
