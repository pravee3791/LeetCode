
const getBalanceByCategoryInPeriod = (transactions = [], categories = [], start, end) => {
    if (categories.length == 0) { return 0 };
    const transcationByCategory = {};
    for (let i in categories) {
        transcationByCategory[categories[i]] = transactions.filter((obj) => {
            return (obj.category == categories[i])
                &&jj
                (
                   ((toTimestamp(start) <= toTimestamp(new Date(obj.time))) &&
                    (toTimestamp(new Date(obj.time)) <= toTimestamp(end))|| (toTimestamp(new Date(obj.time)) == toTimestamp(end) || toTimestamp(new Date(obj.time) === toTimestamp(start))))
                )
        });
    }
    for (const key in transcationByCategory) {
        transcationByCategory[key] = transcationByCategory[key].reduce((res, value) => {
            res += Number(value.amount);
            return res;
        }, 0)
    }
    return transcationByCategory;
};
const convertToDateWithLocalization = function (date) {
    const dateInString = new Date(date).toISOString().split("T")[0]
    return new Date(dateInString);
}
const toTimestamp = (strDate) => {
    const dt = Date.parse(strDate);
    return dt / 1000;
}
const checkifDateInRange = (start, end, date) => {
    if (
        ((toTimestamp(start) == toTimestamp(new Date(date))) &&
            (toTimestamp(new Date(date)) == toTimestamp(end)))
    ) {

    }
}
const testData = [{
    "id": "2498e871-0552-4172-9fde-7660410e0c17",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -2300,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-02-05T01:06:58.198Z"
}, {
    "id": "bcaee2ae-6915-4b19-8a42-ac13b910292b",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -5900,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-13T18:29:19.035Z"
}, {
    "id": "f8d54b50-2d1a-47be-8b14-46e5d1fb77e3",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -1800,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-02-15T06:51:52.671Z"
}, {
    "id": "c4b87308-2240-4cbc-a7df-e727e314d27c",
    "sourceAccount": "my_account",
    "targetAccount": "supermarket",
    "amount": -6100,
    "currency": "EUR",
    "category": "groceries",
    "time": "2021-02-26T17:33:25.116Z"
}, {
    "id": "59761733-b05c-4f14-89f1-1d5ffd8e325f",
    "sourceAccount": "my_account",
    "targetAccount": "book_store",
    "amount": -6900,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-02-07T21:03:02.902Z"
}, {
    "id": "d0771beb-93f0-42d9-8406-e375bfec3109",
    "sourceAccount": "my_account",
    "targetAccount": "cinema",
    "amount": -1600,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-02-05T14:56:21.814Z"
}, {
    "id": "1533f432-f43e-49e6-a2aa-5ba384b96a34",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -6000,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-25T23:17:45.393Z"
}, {
    "id": "5a6bb142-03a1-498e-aad0-6c1da2f4ee4f",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -8400,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-14T12:12:13.540Z"
}, {
    "id": "c8739130-3f26-4358-9199-a7156f04c3b7",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -6300,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-15T08:02:59.170Z"
}, {
    "id": "3abb77fb-31f2-4b87-a1a1-c0ca444bb0f0",
    "sourceAccount": "my_account",
    "targetAccount": "cinema",
    "amount": -7600,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-02-13T03:52:54.345Z"
}, {
    "id": "179fb007-3e40-4a55-a72c-436aa2a7c9d2",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -9500,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-02-10T15:38:46.935Z"
}, {
    "id": "be68fa9c-5f22-4fce-abb1-ac05427225b8",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -9000,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-08T11:21:48.404Z"
}, {
    "id": "84515caa-279f-4a21-8dde-415090e0e6be",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -2200,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-01T14:36:47.214Z"
}, {
    "id": "779e5c6a-a9d6-4366-a19e-762f2268b71e",
    "sourceAccount": "my_account",
    "targetAccount": "book_store",
    "amount": -8500,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-02-15T06:31:39.535Z"
}, {
    "id": "3fab96cb-54bd-4ed1-9405-7bb35715deb0",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -3900,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-02-14T14:06:50.679Z"
}, {
    "id": "89dd3135-bdfa-44ad-9ca3-585eaa5a58c4",
    "sourceAccount": "my_account",
    "targetAccount": "book_store",
    "amount": -9100,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-02-18T06:16:29.197Z"
}, {
    "id": "7b296bb4-ea5d-4ba9-9ca9-95aef588947f",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -200,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-11T09:59:47.234Z"
}, {
    "id": "844d2b8f-0f09-44b8-be0d-a791bc033321",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -3500,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-02-19T20:33:54.767Z"
}, {
    "id": "b37920f9-c307-4b48-a361-8a896f1fa971",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -9700,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-02-12T02:44:04.280Z"
}, {
    "id": "dd36cb1f-d8cd-43fc-a52b-8a8d1f32ee84",
    "sourceAccount": "my_account",
    "targetAccount": "cinema",
    "amount": -3700,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-02-22T11:41:55.395Z"
}, {
    "id": "b32585bf-ace6-48e3-932f-4fcd0042c0a8",
    "sourceAccount": "company_x",
    "targetAccount": "my_account",
    "amount": 350000,
    "currency": "EUR",
    "category": "salary",
    "time": "2021-02-24T23:00:00.000Z"
}, {
    "id": "2385d18d-0221-45db-aee1-c892f82f8e59",
    "sourceAccount": "company_x",
    "targetAccount": "my_account",
    "amount": 50000,
    "currency": "EUR",
    "category": "pension_benefits",
    "time": "2021-02-24T23:00:00.000Z"
}, {
    "id": "a9d0c132-c789-4445-834c-f146f2de71d2",
    "sourceAccount": "my_account",
    "targetAccount": "supermarket",
    "amount": -3400,
    "currency": "EUR",
    "category": "groceries",
    "time": "2021-03-20T21:02:15.593Z"
}, {
    "id": "0d185806-1c34-4594-a8d1-1df746db862b",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -7600,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-26T02:13:27.437Z"
}, {
    "id": "56c51476-6831-48a0-98b2-7970c0213a15",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -1800,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-01T21:12:37.435Z"
}, {
    "id": "6f971682-885a-4981-a95d-d96c1c2dd6bf",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -400,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-27T06:41:12.339Z"
}, {
    "id": "5849bbd4-4c43-4756-8144-a03d9613fbe7",
    "sourceAccount": "my_account",
    "targetAccount": "supermarket",
    "amount": -8500,
    "currency": "EUR",
    "category": "groceries",
    "time": "2021-03-25T17:17:35.917Z"
}, {
    "id": "e22c5cda-e5a4-4f86-b650-8b72e2089c1e",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -2900,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-03-17T23:47:26.528Z"
}, {
    "id": "8a578fef-a490-4ab9-a286-a147a00b614d",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -400,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-03-20T15:50:52.276Z"
}, {
    "id": "ae24594d-4fce-479b-b1e5-43da321cba9c",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -9600,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-03-01T02:09:11.705Z"
}, {
    "id": "7fa8e0f9-215d-4b79-83b6-83225b71cfcd",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -5300,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-03-27T03:03:35.349Z"
}, {
    "id": "1486912c-ff08-41f6-a082-f4858715fa59",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -1600,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-26T13:49:14.680Z"
}, {
    "id": "2941475f-189f-4a1d-9237-3f8221bc4585",
    "sourceAccount": "my_account",
    "targetAccount": "supermarket",
    "amount": -1500,
    "currency": "EUR",
    "category": "groceries",
    "time": "2021-03-25T21:02:30.670Z"
}, {
    "id": "4c1f824b-4ed4-440f-841c-e23a10928460",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -3500,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-10T21:53:30.005Z"
}, {
    "id": "9fbca681-8298-4d5a-be67-e76c4e6e510a",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -9200,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-20T03:08:21.520Z"
}, {
    "id": "ad20ee5f-bab4-4e26-a638-b76fbd53a70c",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -4500,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-03-06T00:38:21.015Z"
}, {
    "id": "cec7801b-aea4-4af4-b8bc-433093d185bd",
    "sourceAccount": "my_account",
    "targetAccount": "book_store",
    "amount": -8500,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-03-01T14:37:59.946Z"
}, {
    "id": "79fdf090-a555-47ba-b677-61fa985acdb4",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -7300,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-08T18:51:50.798Z"
}, {
    "id": "f7d1154d-876b-4170-9ba3-d45cb0a590b5",
    "sourceAccount": "my_account",
    "targetAccount": "cinema",
    "amount": -800,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-03-19T09:31:30.485Z"
}, {
    "id": "84fe1150-40c7-46a6-8649-18768b65b1fc",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -5000,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-15T08:45:06.057Z"
}, {
    "id": "894ec63f-3a71-4efc-905c-37bca506236d",
    "sourceAccount": "my_account",
    "targetAccount": "bowling_alley",
    "amount": -2200,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-03-25T20:44:27.660Z"
}, {
    "id": "85b0627b-116f-4655-941e-52e597571bae",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -700,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-22T04:16:54.190Z"
}, {
    "id": "efbd8edf-6ee5-40de-8a9a-aa8100b506a0",
    "sourceAccount": "company_x",
    "targetAccount": "my_account",
    "amount": 350000,
    "currency": "EUR",
    "category": "salary",
    "time": "2021-03-24T23:00:00.000Z"
}, {
    "id": "02563c87-fd5c-4bc7-af62-82797eea16f5",
    "sourceAccount": "company_x",
    "targetAccount": "my_account",
    "amount": 50000,
    "currency": "EUR",
    "category": "pension_benefits",
    "time": "2021-03-24T23:00:00.000Z"
}, {
    "id": "11ff73b5-e771-441c-886a-498d93b5093d",
    "sourceAccount": "my_account",
    "targetAccount": "book_store",
    "amount": -9600,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-04-08T05:15:56.905Z"
}, {
    "id": "8c3ec38d-1821-4d49-aef1-2385cb3c2b1b",
    "sourceAccount": "my_account",
    "targetAccount": "cinema",
    "amount": -5700,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-04-07T21:16:57.819Z"
}, {
    "id": "d1c77d7c-ccda-453c-ac01-444e9d5abca3",
    "sourceAccount": "my_account",
    "targetAccount": "book_store",
    "amount": -7400,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-04-07T22:46:44.071Z"
}, {
    "id": "837127ab-f523-4b11-bed3-ae488be4545d",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -9200,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-04-05T01:55:16.646Z"
}, {
    "id": "21ab6c07-2b7d-47cd-adfe-03dac51e65ba",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -700,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-04-09T17:20:52.618Z"
}, {
    "id": "74441180-87f9-43d6-8dca-41f4a75aff2e",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -1100,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-04-12T14:55:53.598Z"
}, {
    "id": "f035dd94-8a70-4fee-a1af-4e35e17614e7",
    "sourceAccount": "my_account",
    "targetAccount": "fitness_club",
    "amount": -100,
    "currency": "EUR",
    "category": "sports",
    "time": "2021-04-02T14:33:52.587Z"
}, {
    "id": "c48e0fc2-28fd-4602-aef0-873db42c688e",
    "sourceAccount": "my_account",
    "targetAccount": "cinema",
    "amount": -2800,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-04-14T08:46:40.070Z"
}, {
    "id": "7b5ebc26-e496-4426-b748-88333e48d605",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -2000,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-04-05T09:43:44.802Z"
}, {
    "id": "a1ab8201-7e4d-457d-9e43-559f7c9487eb",
    "sourceAccount": "my_account",
    "targetAccount": "restaurant",
    "amount": -3700,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-04-13T14:18:38.460Z"
}]

console.log(getBalanceByCategoryInPeriod(
    testData,
    ['entertainment', 'sports'],
    new Date('2021-03-03T00:38:21.015Z'),
    new Date('2021-03-01T02:09:11.705Z')
)
)
// .toEqual({ sports: -9200, entertainment: -13100 });)
// "end": 2021-03-06T00:38:21.015Z,
// +   "start": 2021-03-01T02:09:11.705Z,































// module.exports = getBalanceByCategoryInPeriod;
// includes transactions on `start` and excludes transactions on `end`