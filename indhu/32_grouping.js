class Solution {
    // Function to check if given number n is a power of two.
    isPowerofTwo(arr) {
        const data = arr.reduce(function (r, a) {
            r[a.date] = r[a.date] || [];
            r[a.date].push(a.Slot);
            return r;
        }, {});
        return data
    }
}

const resp = new Solution().isPowerofTwo([
    {
        name: 'indhu',
        age: 40,
        location: 'Pondicherry',
        date: '9:00',
        Slot: [
            {
                name: 'test'
            },
            {
                name: 'test'
            }
        ]
    },
    {
        name: 'indhu',
        age: 40,
        location: 'Pondicherry',
        date: '9:00',
        Slot: [
            {
                name: 'test'
            },
            {
                name: 'test'
            }
        ]
    },
    {
        name: 'kavi',
        age: 40,
        location: 'Pondicherry',
        date: '10:00',
        Slot: [
            {
                name: 'test'
            },
            {
                name: 'test'
            }
        ]
    },
    {
        name: 'kavi',
        age: 40,
        location: 'Pondicherry',
        date: '10:00',
        Slot: [
            {
                name: 'test'
            },
            {
                name: 'test'
            }
        ]
    },
]);

console.log(resp);