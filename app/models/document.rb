require 'coderay'

class Document < ActiveRecord::Base
  before_create :build_token

  validates :body, :editor_session, presence: true


  def build_token
    self.token = SecureRandom.uuid
  end

  def highlight
    @highlight ||= CodeRay.scan(self.body, self.editor_session.to_sym).div(:line_numbers => :table)
  end
end
