export default function Table() {
    const data = [
      { id: 1, name: 'John Doe', amount: '$250', date: '2023-10-01' },
      { id: 2, name: 'Jane Smith', amount: '$150', date: '2023-10-02' },
      { id: 3, name: 'Alice Johnson', amount: '$350', date: '2023-10-03' },
    ];
  
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }