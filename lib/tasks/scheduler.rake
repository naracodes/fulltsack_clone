require 'time'

desc "Record cash balance"
task :record => :environment do
    User.all.each do |user|
      PortfoDatum.create!({
          user_id: user.id,
          date: Time.now - (60*60*4),
          holdings_snapshot: user.holdings,
          label: (Time.now - (60*60*4)).strftime("%I:%M %p"),
          cash_balance: user.cash_balance
        })
    end    
end