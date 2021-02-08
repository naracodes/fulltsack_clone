require 'time'

desc "Record cash balance"
task :record => :environment do
  require 'rufus-scheduler'
  scheduler = Rufus::Scheduler.new
  
  scheduler.cron '30-55/5 14 * * 1-5' do
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
  scheduler.cron '*/5 15-20 * * 1-5' do
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
  scheduler.cron '0 21 * * 1-5' do
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
end