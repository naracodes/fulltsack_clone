

json.set! @portfo_record.id do
    json.extract! @portfo_record, :id, :user_id, :balance
end