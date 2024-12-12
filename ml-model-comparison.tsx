import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ModelComparison = () => {
  const accuracyData = [
    {
      name: 'SVM',
      training: 89.10,
      testing: 89.74,
      rocAuc: 85.00
    },
    {
      name: 'KNN',
      training: 94.87,
      testing: 94.87,
      rocAuc: 98.00
    },
    {
      name: 'Naive Bayes',
      training: 69.87,
      testing: 71.79,
      rocAuc: 77.00
    },
    {
      name: 'Decision Tree',
      training: 100.00,
      testing: 92.31,
      rocAuc: 84.00
    },
    {
      name: 'Random Forest',
      training: 100.00,
      testing: 94.87,
      rocAuc: 95.00
    },
    {
      name: 'Logistic Reg',
      training: 86.54,
      testing: 89.74,
      rocAuc: 83.00
    }
  ];

  const metricsData = [
    {
      name: 'SVM',
      precision: 94.00,
      recall: 71.00,
      f1: 77.00
    },
    {
      name: 'KNN',
      precision: 97.00,
      recall: 86.00,
      f1: 90.00
    },
    {
      name: 'Naive Bayes',
      precision: 61.00,
      recall: 66.00,
      f1: 62.00
    },
    {
      name: 'Decision Tree',
      precision: 89.00,
      recall: 84.00,
      f1: 86.00
    },
    {
      name: 'Random Forest',
      precision: 97.00,
      recall: 86.00,
      f1: 90.00
    },
    {
      name: 'Logistic Reg',
      precision: 94.00,
      recall: 71.00,
      f1: 77.00
    }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Model Accuracy Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={accuracyData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="training" name="Training Accuracy" fill="#8884d8" />
                <Bar dataKey="testing" name="Testing Accuracy" fill="#82ca9d" />
                <Bar dataKey="rocAuc" name="ROC-AUC Score" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Model Metrics Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={metricsData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="precision" name="Precision (Macro Avg)" fill="#8884d8" />
                <Bar dataKey="recall" name="Recall (Macro Avg)" fill="#82ca9d" />
                <Bar dataKey="f1" name="F1-Score (Macro Avg)" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelComparison;
