# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  asset_id   :integer
#  ticker     :string           not null
#
class Watchlist < ApplicationRecord
    validates :user_id, :ticker, presence :true

    belongs_to :user

    has_many :assets,
        foreign_key: :asset_id,
        class_name: 'Asset'


    # def watchlist
    #     Asset.joins(:assets).where('user.id = ?', )
    # end
end

curl --header 'Accept: text/event-stream' https://cloud-sse.iexapis.com/stable/news-stream\?symbols\=aapl\&token\=YOUR_TOKEN