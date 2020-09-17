@porffolio_data.each do |data|
    json.set! data.user_id do
        json.extract! data, :user_id, :balance, :date
    end
end