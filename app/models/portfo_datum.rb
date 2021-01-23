# == Schema Information
#
# Table name: portfo_data
#
#  id                :bigint           not null, primary key
#  user_id           :integer
#  label             :string
#  cash_balance      :float
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  date              :string
#  holdings_snapshot :json
#
class PortfoDatum < ApplicationRecord
    require 'rufus-scheduler'
    scheduler = Rufus::Scheduler.new

    @today = Time.now
    
    def get_portfo_data(range)
        if range == "1D"
        elsif range == "1W"
        elsif range == "1M"
        elsif range == "3M"
        elsif range == "1Y"
        end
    end
end
