import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../domain/trip.dart';

class TripCard extends StatelessWidget {
  final Trip trip;
  const TripCard({super.key, required this.trip});

  @override
  Widget build(BuildContext context) {
    final numberFormat = NumberFormat.currency(name: trip.currency, symbol: _currencySymbol(trip.currency));
    return Card(
      clipBehavior: Clip.antiAlias,
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          AspectRatio(
            aspectRatio: 16 / 9,
            child: Ink.image(
              image: NetworkImage(trip.coverImage),
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(Icons.location_on_outlined, size: 16, color: Colors.grey[600]),
                    const SizedBox(width: 4),
                    Expanded(
                      child: Text(
                        trip.location,
                        style: Theme.of(context).textTheme.labelMedium?.copyWith(color: Colors.grey[700]),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 4),
                Text(
                  trip.title,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.w700),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Icon(Icons.star_rounded, color: Colors.amber[700], size: 18),
                    const SizedBox(width: 4),
                    Text('${trip.rating.toStringAsFixed(1)} (${trip.reviews})',
                        style: Theme.of(context).textTheme.labelMedium),
                    const Spacer(),
                    Icon(Icons.schedule, size: 16, color: Colors.grey[600]),
                    const SizedBox(width: 4),
                    Text('${trip.durationDays} days', style: Theme.of(context).textTheme.labelMedium),
                  ],
                ),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 6,
                  runSpacing: -6,
                  children: trip.tags
                      .take(3)
                      .map((t) => Chip(
                            label: Text(t),
                            padding: EdgeInsets.zero,
                            visualDensity: VisualDensity.compact,
                            side: BorderSide.none,
                          ))
                      .toList(),
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Text(numberFormat.format(trip.price),
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold)),
                    const Spacer(),
                    FilledButton(
                      onPressed: () {},
                      child: const Text('Book now'),
                    )
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

String _currencySymbol(String currency) {
  switch (currency) {
    case 'USD':
      return '4';
    case 'EUR':
      return '€';
    case 'EGP':
      return 'E£';
    default:
      return currency;
  }
}
