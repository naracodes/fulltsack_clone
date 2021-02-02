desc "Record cash balance"
task :record => :environment do
    User.all.each do |user|
      PortfoDatum.create!({
          user_id: user.id,
          date: Time.now,
          holdings_snapshot: user.holdings,
          label: Time.now.strftime("%I:%M %p"),
          cash_balance: user.cash_balance
        })
    end    
end